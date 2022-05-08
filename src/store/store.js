import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    favorite: [],
    comparison: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    ADD_TO_FAVORITE: (state, product) => {
        if (this.FAVORITE.length) {
          let isProductFavorite = false;
          this.FAVORITE.map(function (item) {
            if (item.id === product.id) {
              isProductFavorite = true;
            }
          })
          if (!isProductFavorite) {
            this.ADD_TO_FAVORITE(product)
          }
        } else {
          this.ADD_TO_FAVORITE(product)
        }
    },
    SET_FAVORITE: (state, product) => {
      state.favorite.push(product)
    },
    SPLICE_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    }
  },
  actions: {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    ADD_TO_FAVORITE({commit}, product) {
      commit('SET_FAVORITE', product)
    },
    REMOVE_FROM_CART({commit}, index) {
      commit('SPLICE_CART', index);
    },
    DECREMENT_CART_QUANTITY({commit}, index) {
      commit('DECREMENT', index);
    },
    INCREMENT_CART_QUANTITY({commit}, index) {
      commit('INCREMENT', index);
    },
    GET_PRODUCTS_FROM_API({commit}){
      return axios ('http://localhost:3000/sliderElems',{
        method:"GET"
      })
      .then ((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    FAVORITE(state) {
      return state.favorite;
    },
    COMPARISON(state) {
      return state.comparison;
    },
    TOTAL(state) {
      return state.cart.reduce((carry, product) => {
          carry += +product.newPrice * +product.quantity;
          return carry;
      }, 0);
    },
    // COUNTER_LENGTH(state) {
    //   if (state.cart.length) {
    //     return state.cart.length
    //     if (state.favorite.length) {
    //       return state.favorite.length
    //     } else {
    //       console.log('пошел нахуй!');
    //     }
    //   }
    // }
  },
  modules: {
  }
})
 export default store;
