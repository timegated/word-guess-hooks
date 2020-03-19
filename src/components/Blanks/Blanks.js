import React from 'react';

const Blanks = ({letters}) => (
    letters.map(item => {
        return (
            <div key={item}>
                _
            </div>
        )
    })
)

export default Blanks;