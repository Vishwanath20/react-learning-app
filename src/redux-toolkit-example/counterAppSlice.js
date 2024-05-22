import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';



const initialState = {
  count: 0,
};

const counterAppSlice = createSlice({
  name: 'counterApp',
  initialState,
  reducers: {
    increment(state) {
      console.log('incre())())()', state.count);
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } = counterAppSlice.actions;

export default counterAppSlice.reducer;
