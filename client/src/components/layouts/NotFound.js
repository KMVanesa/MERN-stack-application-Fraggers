import React, { Fragment } from 'react'


const NotFound = () => {
    return (
        <Fragment>
            <h1 className="x-large text-primary">
                <i class="las la-exclamation-triangle"></i>Page not found
            </h1>
            <p className="large">Sorry , Page does not exists</p>
        </Fragment>
    )
}

export default NotFound
