import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import monitor from './enhancers/monitor.js'
import loggerMiddleware from './middleware/logger.js'
import picturesReducer from './reducers/picturesSlice';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
      reducer: {   
		  pictures: picturesReducer
      },
      middleware: [loggerMiddleware, ...getDefaultMiddleware()],
      preloadedState,
      enhancers: [monitor]
  }) 
  return store
}