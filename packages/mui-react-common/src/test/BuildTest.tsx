import React, {memo} from 'react'


const BuildTest = () => {

    return (
        <div>THIS SHOULD NOT BE IN THE BUILD SCRIPT</div>
    );

}

export default memo(BuildTest);