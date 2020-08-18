import React, { useContext } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { CartContext } from './../../context/CartContext';
import { PickupOrDelivery } from './PickupOrDelivery';
import { Calendar } from './Calendar';
import { Times } from './Times';
import { Summary } from './Summary';
import styles from './Page.module.css';

export const Page = () => {
  const [globalCart, setGlobalCart] = useContext(CartContext);

  // Code all of the menu items here and dynamically render them.
  // Clicking on a menu item for more info 'zooms in' and uses more data in the object entry.

  const handleCardFlip = (index_number) => {
    setGlobalCart(
      globalCart.map((item, index_item) => {
        if (index_item === index_number) {
          if (item.viewOptions === 1) {
            item.viewOptions = 0;
          } else {
            item.viewOptions = 1;
          }
        }
        return item;
      })
    );
  };

  // Small Individual Start
  const plusSmallIndQuantity = (index_number) => {
    console.log(index_number);
    const editedMenuItem = { ...globalCart[index_number] };
    editedMenuItem.smallIndQuantity += 1;
    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const minusSmallIndQuantity = (index_number) => {
    console.log(index_number);

    const editedMenuItem = { ...globalCart[index_number] };
    if (editedMenuItem.smallIndQuantity > 0) {
      editedMenuItem.smallIndQuantity -= 1;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const handleSmallIndQuantityInput = (event, index_number) => {
    const editedMenuItem = { ...globalCart[index_number] };
    // Convert the input string to a number.

    // If the user did not type in a number return;

    let inputNumber = parseInt(event.target.value);
    if (isNaN(inputNumber) && event.target.value !== '') {
      return;
    }

    // User types in enter or delete, it appears as a blank in the event value.
    // So set the number equal to zero.
    if (event.target.value === '') {
      inputNumber = 0;
    }

    editedMenuItem.smallIndQuantity = inputNumber;

    if (editedMenuItem.smallIndQuantity < 0) {
      // User entered a negative value.
      // Set back to zero.
      editedMenuItem.smallIndQuantity = 0;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };
  // Small Individual End

  // Small Box Start
  const plusSmallBoxQuantity = (index_number) => {
    console.log(index_number);
    const editedMenuItem = { ...globalCart[index_number] };
    editedMenuItem.smallBoxQuantity += 1;
    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const minusSmallBoxQuantity = (index_number) => {
    console.log(index_number);

    const editedMenuItem = { ...globalCart[index_number] };
    if (editedMenuItem.smallBoxQuantity > 0) {
      editedMenuItem.smallBoxQuantity -= 1;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const handleSmallBoxQuantityInput = (event, index_number) => {
    const editedMenuItem = { ...globalCart[index_number] };
    // Convert the input string to a number.

    // If the user did not type in a number return;

    let inputNumber = parseInt(event.target.value);
    if (isNaN(inputNumber) && event.target.value !== '') {
      return;
    }

    // User types in enter or delete, it appears as a blank in the event value.
    // So set the number equal to zero.
    if (event.target.value === '') {
      inputNumber = 0;
    }

    editedMenuItem.smallBoxQuantity = inputNumber;

    if (editedMenuItem.smallBoxQuantity < 0) {
      // User entered a negative value.
      // Set back to zero.
      editedMenuItem.smallBoxQuantity = 0;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };
  // Small Box End

  // Medium Individual Start
  const plusMediumIndQuantity = (index_number) => {
    console.log(index_number);
    const editedMenuItem = { ...globalCart[index_number] };
    editedMenuItem.mediumIndQuantity += 1;
    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const minusMediumIndQuantity = (index_number) => {
    console.log(index_number);

    const editedMenuItem = { ...globalCart[index_number] };
    if (editedMenuItem.mediumIndQuantity > 0) {
      editedMenuItem.mediumIndQuantity -= 1;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const handleMediumIndQuantityInput = (event, index_number) => {
    const editedMenuItem = { ...globalCart[index_number] };
    // Convert the input string to a number.

    // If the user did not type in a number return;

    let inputNumber = parseInt(event.target.value);
    if (isNaN(inputNumber) && event.target.value !== '') {
      return;
    }

    // User types in enter or delete, it appears as a blank in the event value.
    // So set the number equal to zero.
    if (event.target.value === '') {
      inputNumber = 0;
    }

    editedMenuItem.mediumIndQuantity = inputNumber;

    if (editedMenuItem.mediumIndQuantity < 0) {
      // User entered a negative value.
      // Set back to zero.
      editedMenuItem.mediumIndQuantity = 0;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };
  // Medium Individual End

  // Medium Box Start
  const plusMediumBoxQuantity = (index_number) => {
    console.log(index_number);
    const editedMenuItem = { ...globalCart[index_number] };
    editedMenuItem.mediumBoxQuantity += 1;
    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const minusMediumBoxQuantity = (index_number) => {
    console.log(index_number);

    const editedMenuItem = { ...globalCart[index_number] };
    if (editedMenuItem.mediumBoxQuantity > 0) {
      editedMenuItem.mediumBoxQuantity -= 1;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const handleMediumBoxQuantityInput = (event, index_number) => {
    const editedMenuItem = { ...globalCart[index_number] };
    // Convert the input string to a number.

    // If the user did not type in a number return;

    let inputNumber = parseInt(event.target.value);
    if (isNaN(inputNumber) && event.target.value !== '') {
      return;
    }

    // User types in enter or delete, it appears as a blank in the event value.
    // So set the number equal to zero.
    if (event.target.value === '') {
      inputNumber = 0;
    }

    editedMenuItem.mediumBoxQuantity = inputNumber;

    if (editedMenuItem.mediumBoxQuantity < 0) {
      // User entered a negative value.
      // Set back to zero.
      editedMenuItem.mediumBoxQuantity = 0;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };
  // Medium Box End

  // Large Individual Start
  const plusLargeIndQuantity = (index_number) => {
    console.log(index_number);
    const editedMenuItem = { ...globalCart[index_number] };
    editedMenuItem.largeIndQuantity += 1;
    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const minusLargeIndQuantity = (index_number) => {
    console.log(index_number);

    const editedMenuItem = { ...globalCart[index_number] };
    if (editedMenuItem.largeIndQuantity > 0) {
      editedMenuItem.largeIndQuantity -= 1;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const handleLargeIndQuantityInput = (event, index_number) => {
    const editedMenuItem = { ...globalCart[index_number] };
    // Convert the input string to a number.

    // If the user did not type in a number return;

    let inputNumber = parseInt(event.target.value);
    if (isNaN(inputNumber) && event.target.value !== '') {
      return;
    }

    // User types in enter or delete, it appears as a blank in the event value.
    // So set the number equal to zero.
    if (event.target.value === '') {
      inputNumber = 0;
    }

    editedMenuItem.largeIndQuantity = inputNumber;

    if (editedMenuItem.largeIndQuantity < 0) {
      // User entered a negative value.
      // Set back to zero.
      editedMenuItem.largeIndQuantity = 0;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };
  // Large Individual End

  // Large Box Start

  const plusLargeBoxQuantity = (index_number) => {
    console.log(index_number);
    const editedMenuItem = { ...globalCart[index_number] };
    editedMenuItem.largeBoxQuantity += 1;
    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const minusLargeBoxQuantity = (index_number) => {
    console.log(index_number);

    const editedMenuItem = { ...globalCart[index_number] };
    if (editedMenuItem.largeBoxQuantity > 0) {
      editedMenuItem.largeBoxQuantity -= 1;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };

  const handleLargeBoxQuantityInput = (event, index_number) => {
    const editedMenuItem = { ...globalCart[index_number] };
    // Convert the input string to a number.

    // If the user did not type in a number return;

    let inputNumber = parseInt(event.target.value);
    if (isNaN(inputNumber) && event.target.value !== '') {
      return;
    }

    // User types in enter or delete, it appears as a blank in the event value.
    // So set the number equal to zero.
    if (event.target.value === '') {
      inputNumber = 0;
    }

    editedMenuItem.largeBoxQuantity = inputNumber;

    if (editedMenuItem.largeBoxQuantity < 0) {
      // User entered a negative value.
      // Set back to zero.
      editedMenuItem.largeBoxQuantity = 0;
    }

    setGlobalCart([
      ...globalCart.map((item, key) => {
        if (key === index_number) {
          return editedMenuItem;
        } else {
          return item;
        }
      }),
    ]);
  };
  // Large Box End

  return (
    <div className="flex-container">
      <div className="menu-top-space"></div>

      <PickupOrDelivery />

      <Calendar />

      <Times />

      <Summary />

      <div className={styles.flexContainerWrapper}>
        <div className={styles.flexContainer}>
          {globalCart.map((menuItem, index_number) => {
            let flippedStatus = true;
            if (menuItem.viewOptions === 0) {
              flippedStatus = false;
            }
            return (
              <div className={styles.foodCard} key={index_number}>
                <Flippy isFlipped={flippedStatus}>
                  <FrontSide
                    animationDuration={200}
                    className={styles.removeFlippyDefaultStyles}
                  >
                    <div className={styles.foodItemCard}>
                      <img
                        className={styles.bannerImage}
                        src={menuItem.imageLink}
                        alt="cannoli"
                      />
                      <h1 className={styles.cardTitle}>{menuItem.name}</h1>
                      <p className={styles.cardDescription}>
                        {menuItem.description}
                      </p>
                      <div className={styles.cardVerticalSpacer}></div>

                      <button
                        className={styles.foodCardButton}
                        onClick={() => handleCardFlip(index_number)}
                      >
                        View Options
                      </button>
                    </div>
                  </FrontSide>
                  <BackSide animationDuration={200} className="flippy-no-style">
                    <div className="container profile-card">
                      <div className="profile-card-spacer"></div>
                      <h1 className="view-options-name">{menuItem.name}</h1>
                      <div className="flex-container-menu">
                        <div className="grid-container-menu">
                          <div>Sizes</div>
                          <div>Individual</div>
                          <div>Box</div>
                          <div className="size-descriptor">Small</div>
                          <div className="quantity-selector-center">
                            <div className="quantity-selector">
                              <button
                                className="quantity-selector-minus"
                                onClick={() =>
                                  minusSmallIndQuantity(index_number)
                                }
                              >
                                -
                              </button>
                              <div className="quantity-selector-number">
                                <input
                                  value={menuItem.smallIndQuantity}
                                  onChange={(event) =>
                                    handleSmallIndQuantityInput(
                                      event,
                                      index_number
                                    )
                                  }
                                  className="quantity-selector-input"
                                />
                              </div>
                              <button
                                className="quantity-selector-plus"
                                onClick={() =>
                                  plusSmallIndQuantity(index_number)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="quantity-selector-center">
                            <div className="quantity-selector">
                              <button
                                className="quantity-selector-minus"
                                onClick={() =>
                                  minusSmallBoxQuantity(index_number)
                                }
                              >
                                -
                              </button>
                              <div className="quantity-selector-number">
                                <input
                                  value={menuItem.smallBoxQuantity}
                                  onChange={(event) =>
                                    handleSmallBoxQuantityInput(
                                      event,
                                      index_number
                                    )
                                  }
                                  className="quantity-selector-input"
                                />
                              </div>
                              <button
                                className="quantity-selector-plus"
                                onClick={() =>
                                  plusSmallBoxQuantity(index_number)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="size-descriptor med">Medium</div>
                          <div className="quantity-selector-center">
                            <div className="quantity-selector">
                              <button
                                className="quantity-selector-minus"
                                onClick={() =>
                                  minusMediumIndQuantity(index_number)
                                }
                              >
                                -
                              </button>
                              <div className="quantity-selector-number">
                                <input
                                  value={menuItem.mediumIndQuantity}
                                  onChange={(event) =>
                                    handleMediumIndQuantityInput(
                                      event,
                                      index_number
                                    )
                                  }
                                  className="quantity-selector-input"
                                />
                              </div>
                              <button
                                className="quantity-selector-plus"
                                onClick={() =>
                                  plusMediumIndQuantity(index_number)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="quantity-selector-center">
                            <div className="quantity-selector">
                              <button
                                className="quantity-selector-minus"
                                onClick={() =>
                                  minusMediumBoxQuantity(index_number)
                                }
                              >
                                -
                              </button>
                              <div className="quantity-selector-number">
                                <input
                                  value={menuItem.mediumBoxQuantity}
                                  onChange={(event) =>
                                    handleMediumBoxQuantityInput(
                                      event,
                                      index_number
                                    )
                                  }
                                  className="quantity-selector-input"
                                />
                              </div>
                              <button
                                className="quantity-selector-plus"
                                onClick={() =>
                                  plusMediumBoxQuantity(index_number)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="size-descriptor">Large</div>
                          <div className="quantity-selector-center">
                            <div className="quantity-selector">
                              <button
                                className="quantity-selector-minus"
                                onClick={() =>
                                  minusLargeIndQuantity(index_number)
                                }
                              >
                                -
                              </button>
                              <div className="quantity-selector-number">
                                <input
                                  value={menuItem.largeIndQuantity}
                                  onChange={(event) =>
                                    handleLargeIndQuantityInput(
                                      event,
                                      index_number
                                    )
                                  }
                                  className="quantity-selector-input"
                                />
                              </div>
                              <button
                                className="quantity-selector-plus"
                                onClick={() =>
                                  plusLargeIndQuantity(index_number)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="quantity-selector-center">
                            <div className="quantity-selector">
                              <button
                                className="quantity-selector-minus"
                                onClick={() =>
                                  minusLargeBoxQuantity(index_number)
                                }
                              >
                                -
                              </button>
                              <div className="quantity-selector-number">
                                <input
                                  value={menuItem.largeBoxQuantity}
                                  onChange={(event) =>
                                    handleLargeBoxQuantityInput(
                                      event,
                                      index_number
                                    )
                                  }
                                  className="quantity-selector-input"
                                />
                              </div>
                              <button
                                className="quantity-selector-plus"
                                onClick={() =>
                                  plusLargeBoxQuantity(index_number)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile-card-spacer"></div>
                      <button
                        className="food-button"
                        onClick={() => handleCardFlip(index_number)}
                      >
                        Order Me
                      </button>
                    </div>
                  </BackSide>
                </Flippy>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
