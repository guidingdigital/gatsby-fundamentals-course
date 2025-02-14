import React from "react"
import Styles from "./pure-bootstrap.module.scss"

const PureBootstrap = () => {
    return (
        <div className={`${Styles.container} container`}>
            <div className="row">
                <div className="col-sm">Column 1</div>
                <div className="col-sm">Column 2</div>
                <div className="col-sm">Column 3</div>
            </div>
        </div>
    )
}

export default PureBootstrap