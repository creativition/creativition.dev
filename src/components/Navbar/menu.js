import React, { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!prevState);
    };

    return (
        <menu className="menu">
            <button onClick={toggleMenu} type="button" className={styles["menu_trigger"]}>
                ◆
            </button>
        </menu>
    );
};

export default Menu;