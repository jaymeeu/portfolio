import React from 'react';

function CustomBtn({type,border, txtColor,pd, br,fs, w, bg, hoverBG,txt, fw, onClick}) {

    return (
           <button type={type} variant="contained" onClick={onClick}
            style={{ color: txtColor,
                backgroundColor: bg, 
                borderRadius:br,
                width: w,
                padding:pd,
                fontWeight:fw,
                textTransform:"none",
                fontSize:fs,
                cursor: 'pointer',
                border:border}}
           > {txt}</button>
    )
}

export default CustomBtn