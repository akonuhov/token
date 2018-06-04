import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login'
import RegistrationPage from '@/pages/Registration'
import MainPage from '@/pages/Main'
import ProfilePage from '@/pages/Profile'
import WalletPage from '@/pages/Wallet'
import ReferralPage from '@/pages/Referral'
import PasswordPage from '@/pages/Password'
import EmailPage from '@/pages/Email'
import CalculatorPage from '@/pages/Calculator'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/registration',
      name: 'RegistrationPage',
      component: RegistrationPage
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: {
        checkAuth: true
      }
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: {
        checkAuth: true
      }
    },
    {
      path: '/wallet',
      name: 'WalletPage',
      component: WalletPage,
      meta: {
        checkAuth: true
      }
    },
    {
      path: '/referral',
      name: 'ReferralPage',
      component: ReferralPage,
      meta: {
        checkAuth: true
      }
    },
    {
      path: '/password',
      name: 'PasswordPage',
      component: PasswordPage,
      meta: {
        checkAuth: true
      }
    },
    {
      path: '/email',
      name: 'EmailPage',
      component: EmailPage,
      meta: {
        checkAuth: true
      }
    },
    {
      path: '/calculator',
      name: 'CalculatorPage',
      component: CalculatorPage,
      meta: {
        checkAuth: true
      }
    }
  ]
})
