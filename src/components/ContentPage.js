import React from 'react';
import { siderStates } from './SiderMenu';
import SearchPage from './SearchPage';
// import SavedPage from './SavedPage';

const ContentPage = ({ currState }) => {
    return (
        <div>
            <div style={{ display: (currState === siderStates.Search) ? 'block' : 'none' }}>
                <SearchPage />
            </div>
            <div style={{ display: (currState === siderStates.Saved) ? 'block' : 'none' }}>
                Saved
            </div>
        </div>
    );
};

export default ContentPage;
