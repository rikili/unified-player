import { createSlice } from '@reduxjs/toolkit';
import { siderStates } from '../../components/SiderMenu';

export const siderMenuSlice = createSlice({
    name: 'siderState',
    initialState: siderStates.Search,
    reducers: {
        onSelectChange: (state, action) => {
            return action.payload;
        },
    },
});

export const { onSelectChange } = siderMenuSlice.actions;

export default siderMenuSlice.reducer;
