import s from "../../../pages/ProfilePage.module.css";
import Button from "@material-ui/core/Button";
import React from "react";

type Props = {
    isChanging: boolean,
    setIsChanging: any
}

const ProfileButton = (props: Props) => {

    const {isChanging, setIsChanging} = props;

    return(
        <div className={s.profileBtn} onClick={() => setIsChanging(!isChanging)}>
            <Button variant="outlined" color="primary">
                {isChanging ? "Save info" : "Change info"}
            </Button>
        </div>
    )
}

export default ProfileButton;