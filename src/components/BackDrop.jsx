import React from "react";

function BackDrop ({isOpen, onClick}) {
    return (
        <>
        {isOpen ? 
            <div onClick={onClick} className="cursor-pointer fixed top-[68.49px] inset-0 bg-black bg-opacity-50 z-50"></div>
        :
    null}
    </>);
}

export default BackDrop;