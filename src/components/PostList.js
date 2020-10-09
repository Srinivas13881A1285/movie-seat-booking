import React, { Component } from 'react'

class PostList extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="userId" />
                    </div>

                    <div>
                        <input type="text" name="title" />
                    </div>

                    <div>
                        <input type="text" name="body" />
                    </div>

                </form>
            </div>
        )
    }
}

export default PostList
