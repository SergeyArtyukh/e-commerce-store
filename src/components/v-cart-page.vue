<template lang="html">
  <div class="v-container v-cart-page-wrapper">
    <p class="talign-left">{{cartTitle}}</p>
    <notificationBar
    :messages="messages"

    >
    </notificationBar>
    <div v-if="CART.length" class="v-cart-page-container">
      <div class="v-cart-product-container">
        <div
        class="v-product-card-container"
        v-for="(product, index) in CART"
        :key="product.id"
        >
          <div class="img-container">
            <img :src="require('../assets/images/product-slider-imgs/' + product.url)" alt="#">
          </div>
          <div class="product-info">
            <span>{{product.text}}</span>
            <div class="product-buttons-container">
              <span class="favorite-button" :class="{addedToFavorite: isFavorite}">
                <font-awesome-icon :icon="product.iconFavorite"/>
                <button @click="addToFavorite(product)" type="button">В избранное</button>
              </span>
              <span class="delete-button">
                <font-awesome-icon :icon="product.iconRemoveFromCart"/>
                <button @click="removeFromCart(index)" type="button">Удалить</button>
              </span>
            </div>
          </div>
          <div class="product-price">
            <span>{{product.newPrice + product.currencySign}}</span>
            <span>
              <button @click="decrementCartQty(index)" type="button" name="button">-</button>
              <span>{{product.quantity}}</span>
              <button @click="incrementCartQty(index)" type="button" name="button">+</button>
            </span>
          </div>
        </div>
      </div>
      <div class="v-cart-info-block">
        <div class="v-cib-product-info">
          <p>В корзине</p>
          <span>Товаров: {{CART.length}}</span>
          <span>Введите промокод</span>
          <span v-text="TOTAL"></span>
        </div>
        <div class="v-cib-make-order">
          <button type="button">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
    <span v-else>{{emptyCart}}</span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import notificationBar from './v-home__notification/v-notification.vue'
export default {
  data () {
    return {
      isFavorite: false,
      cartTitle: 'Корзина',
      emptyCart: 'Ваша корзина пуста',
      messages: [],
      productCart: [
        {
          card: 'title'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'CART',
      'TOTAL',
      'FAVORITE'
    ])
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_CART',
      'DECREMENT_CART_QUANTITY',
      'INCREMENT_CART_QUANTITY',
      'ADD_TO_FAVORITE',
    ]),
    removeFromCart(index) {
      this.REMOVE_FROM_CART(index);
    },
    decrementCartQty(index) {
      this.DECREMENT_CART_QUANTITY(index)
    },
    incrementCartQty(index) {
      this.INCREMENT_CART_QUANTITY(index)
    },
    addToFavorite(product) {
      this.ADD_TO_FAVORITE(product)
      .then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift(
          {
            text: 'Товар добавлен в избранное',
            id: timeStamp
          }
        )
      })
    }
  },
  components: {
    notificationBar
  }
}
</script>

<style lang="scss" scoped>
p {
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
.v-cib-product-info {
  display: flex;
  flex-direction: column;
}
.v-cart-page-wrapper {
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  .v-cart-page-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .v-cart-product-container {
      display: flex;
      flex-direction: column;
      width: inherit;
      .v-product-card-container {
        display: flex;
        justify-content: space-around;
        width: inherit;
        .img-container {
          img {
            width: 50%;
          }
        }
        .product-info {
          .product-buttons-container {
            text-align: left;
            margin-top: 20px;
            .addedToFavorite {
              svg,
              button {
                color: green;
              }
            }
            .favorite-button,
            .delete-button {
              font-size: 15px;
              &:hover {
                cursor: pointer;
                color: green;
              }
            }
            button {
              background: transparent;
              border: none;
              font-size: 15px;
              color: grey;
              &:hover {
                  color: green;
              }
            }
          }
        }
        .product-price {
          display: flex;
          flex-direction: column;
        }
      }
    }
    .talign-left {
      text-align: left;
    }
    span {
      color: black;
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
