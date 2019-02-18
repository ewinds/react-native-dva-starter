import { NavigationActions } from 'react-navigation'

let staticNavigator

function setTopLevelNavigator(navigatorRef) {
  staticNavigator = navigatorRef
}

function navigate(routeName, params) {
  staticNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function back(routeName) {
  staticNavigator.dispatch(
    NavigationActions.back({
      routeName
    })
  )
}

// add other navigation functions that you need and export them

export default {
  navigate,
  back,
  setTopLevelNavigator
}
