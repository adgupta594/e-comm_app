import React, { Component } from 'react';

import './directory.style.scss'

import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: "HATS",
                imageURL: "https://i.ibb.co/cvpntL1/hats.png",
                id: 1
            },
            {
                title: "JACKETS",
                imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
                id: 2
            },
            {
                title: "SNEAKERS",
                imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
                id: 3
            },
            {
                title: "WOMENS",
                imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
                id: 4,
                size: 'large'
            },
            {
                title: "MENS",
                imageURL: "https://i.ibb.co/R70vBrQ/men.png",
                id: 5,
                size: 'large'
            }
        ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(element =>
                        <MenuItem key={element.id} title={element.title} imageURL={element.imageURL} size={element.size} />
                    )
                }
            </div>
        )
    }
}

export default Directory;