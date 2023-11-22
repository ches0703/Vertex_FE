import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './redux/UserReducer';
import CategoryReducer from './redux/CategoryReducer';
// that store contain all redux's reducer
export default configureStore({
	reducer: {
    user: UserReducer,
    category: CategoryReducer
  }
})

// if you want get user's name
// const userName = useSelector((state) => state.user.name)

// if you want change user's name(it mean login)
// import login from userReducer
// const dispatch = useDispatch()
// fun() => {dispatch(login("value"))}
