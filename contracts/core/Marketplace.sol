pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./BitflixNFTInterface.sol";
import "./IBitflixPoint.sol";


/**
 * @title A small marketplace allowing users to buy and sell a specific ERC721 token
 * @dev For this example, we are using a fictional token called BitflixNFT
 * @author Pickle Solutions https://github.com/picklesolutions
 */
contract Marketplace is Ownable {
  /* Our events */
  event NewOffer(uint offerId);
  event CloseOffer(uint offerId);
  event ItemBought(uint offerId);

  /* The address of our ERC721 token contract */
  address public bitfilxNFTContractAddress = address(0);

  /* The address of our Point contract */
  address public pointContractAddress = address(0);

  /* The address of Pay erc20 token contract */
  string public payCoinSymbol;
  address public payCoinContractAddress = address(0);

  /* If we need to freeze the marketplace for any reason */
  bool public isMarketPlaceOpen = false;

  /* Our fee (the value is divided by 100, so 250 is 2.50%) */
  uint public marketplaceFee = 250;

  /* Our lock point rate (the value is divided by 100, so 150 is 1.50%) */
  uint public lockPointRate = 0;

  /* The minimum sale price (in Wei) */
  uint public minPrice = 10000;

  /* The structure of our offers */
  struct Offer {
    uint itemId;
    uint price;
    address payable seller;
    address payable buyer;
    bool isOpen;
  }

  /* All the offers are stored here */
  Offer[] public offers;

  /* We keep track of every offers for every users */
  mapping (address => uint[]) public usersToOffersId;

  /**
   * @dev Puts an item on the marketplace
   * @param itemId The id of the item
   * @param price The price expected by the seller
   */
  function createOffer(
    uint itemId,
    uint price
  ) external whenMarketIsOpen() {
    /* Let's talk to our token contract */
    BitflixNFTInterface bitfilxNFT = BitflixNFTInterface(bitfilxNFTContractAddress);

    /* We need to be sure that the sender is the actual owner of the token */
    require(
      bitfilxNFT.ownerOf(itemId) == msg.sender,
      "Sender does not own this item"
    );

    /* Are we approved to manage this item? */
    require(
      bitfilxNFT.getApproved(itemId) == address(this),
      "We do not have approval to manage this item"
    );

    /* Is the selling price abovee the minimum price? */
    require(price >= minPrice, "Price is too low");

    /* We push the offer into our array */
    uint offerId = offers.push(
      Offer({
        itemId: itemId,
        price: price,
        seller: msg.sender,
        buyer: address(0),
        isOpen: true
      })
    ) - 1;

    /* We keep track of offers from users */
    usersToOffersId[msg.sender].push(offerId);

    /* We tell the world there is a new offer */
    emit NewOffer(offerId);
  }

  /**
   * @dev close an Offer
   * @param offerId The id of the offer
   */
  function closeOffer(
    uint offerId
  ) external whenMarketIsOpen() {
    /* Is the offer still open? */
    require(offers[offerId].isOpen, "Offer is closed");

    /* Is the offer is owner */
    require(offers[offerId].seller == msg.sender , "Sender does not own this offer");

    /* We close the offer and register the buyer */
    offers[offerId].isOpen = false;

    /* We tell the world there is a cancel offer */
    emit CloseOffer(offerId);
  }

  /**
   * @dev Buys an item
   * @param offerId The id of the offer
   */
  function buyItem(
    uint offerId
  ) external whenMarketIsOpen() {
    /* Let's talk to our token contract */
    BitflixNFTInterface bitfilxNFT = BitflixNFTInterface(bitfilxNFTContractAddress);

    IERC20 payCoin = IERC20(payCoinContractAddress);

    IBitflixPoint pointContract = IBitflixPoint(pointContractAddress);

    /* Are we still able to manage this item? */
    require(
      bitfilxNFT.getApproved(offers[offerId].itemId) == address(this),
      "We do not have approval to manage this item"
    );

    /* Did the buyer send enough funds? */
    uint256 allowance = payCoin.allowance(msg.sender, address(this));
    require(allowance >= offers[offerId].price, "Check the token allowance");

    uint256 coin_balance = payCoin.balanceOf(msg.sender);
    require(coin_balance >= offers[offerId].price, "Check the token balanceOf");

    /* Did the buyer enough point? */
    uint256 pointLimit = SafeMath.mul( offers[offerId].price / 1e6, lockPointRate) / 100;
    uint256 point_balance = pointContract.pointOf(msg.sender);
    require(point_balance >= pointLimit, "Check the point balanceOf");

    /* Is the offer still open? */
    require(offers[offerId].isOpen, "Offer is closed");

    /* We close the offer and register the buyer */
    offers[offerId].isOpen = false;
    offers[offerId].buyer = msg.sender;

    /* We transfer the item from the seller to the buyer */
    bitfilxNFT.safeTransferFrom(
      offers[offerId].seller,
      offers[offerId].buyer,
      offers[offerId].itemId
    );

    /* This is our fee */
    uint txFee = SafeMath.mul(
      offers[offerId].price,
      marketplaceFee
    ) / 100 / 100;

    /* This is the profit made by the seller */
    uint profit = SafeMath.sub(
      offers[offerId].price,
      txFee
    );
    
    /* consume point */
    if(pointLimit > 0) {
      pointContract.consume(msg.sender, pointLimit);
    }

    /* buyer pay coin */
    payCoin.transferFrom(offers[offerId].buyer, address(this), txFee);
    
    /* We give the seller his money */
    payCoin.transferFrom(offers[offerId].buyer, offers[offerId].seller, profit);
  }

  /**
   * @dev Sets the address of our ERC721 token contract
   * @param newBitflixNFTContractAddress The address of the contract
   */
  function setBitflixNFTContractAddress(
    address newBitflixNFTContractAddress
  ) external onlyOwner() {
    /* The address cannot be null */
    require(newBitflixNFTContractAddress != address(0), "Contract address cannot be null");

    /* We set the address */
    bitfilxNFTContractAddress = newBitflixNFTContractAddress;
  }

  /**
   * @dev Sets the address of Pay erc20 token contract
   * @param newPayCoinContractAddress The address of the contract
   */
  function setPayCoinContractAddress(
    string calldata newpayCoinSymbol,
    address newPayCoinContractAddress
  ) external onlyOwner() {
    /* The address cannot be null */
    require(newPayCoinContractAddress != address(0), "Contract address cannot be null");

    /* We set the address */
    payCoinContractAddress = newPayCoinContractAddress;
    payCoinSymbol = newpayCoinSymbol;
  }

  /**
   * @dev Sets the address of Point contract
   * @param newPointContractAddress The address of the contract
   */
  function setPointContractAddress(
    address newPointContractAddress
  ) external onlyOwner() {
    /* The address cannot be null */
    require(newPointContractAddress != address(0), "Contract address cannot be null");

    /* We set the address */
    pointContractAddress = newPointContractAddress;
  }

  /**
   * @dev Opens the market if the contract address is correct
   */
  function openMarketplace() external onlyOwner() {
    require(bitfilxNFTContractAddress != address(0), "Contract address is not set");
    require(payCoinContractAddress != address(0), "Pay Coin Contract address is not set");
    require(pointContractAddress != address(0), "Point Contract address is not set");

    isMarketPlaceOpen = true;
  }

  /**
   * @dev Closes the market
   */
  function closeMarketplace() external onlyOwner() {
    isMarketPlaceOpen = false;
  }

  /**
   * @dev Set lockPointRate
   */
  function setLockPointRate(uint newLockPointRate) external onlyOwner() {
    lockPointRate = newLockPointRate;
  }

  /**
   * @dev Lets the owner withdraw his funds
   */
  function withdrawFunds() external onlyOwner() {
    address(uint160(owner())).transfer(address(this).balance);
  }

  /**
   * @dev Lets the owner withdraw his coins
   */
  function withdrawCoins() external onlyOwner() {
    IERC20 payCoin = IERC20(payCoinContractAddress);
    uint256 coin_balance = payCoin.balanceOf(address(this));
    payCoin.transfer(address(uint160(owner())), coin_balance);
  }

  /**
   * @dev Returns the offers
   */
  function getOffersTotal() external view returns (uint) {
    return offers.length;
  }

  /**
   * @dev Gets an offer
   * @param offerId The id of the offer
   * @return All the infos about the offer
   */
  function getOffer(uint offerId) external view returns (
    uint itemId,
    uint price,
    address seller,
    address buyer,
    bool isOpen
  ) {
    return (
      offers[offerId].itemId,
      offers[offerId].price,
      offers[offerId].seller,
      offers[offerId].buyer,
      offers[offerId].isOpen
    );
  }

  /**
   * @dev Some functions can only be called when the market is open
   */
  modifier whenMarketIsOpen() {
    require(isMarketPlaceOpen == true, "Marketplace is closed");
    _;
  }
}
