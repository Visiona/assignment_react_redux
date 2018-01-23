import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from './elements/ListGroup'
import Button from './elements/Button'

const GroceryCard = ({groceryItem}) => {

  const {name, description, amount, category, purchased} = groceryItem
  const purchasingStatusClass = purchased ? 'list-group-item list-group-item-action list-group-item-success' : 'list-group-item list-group-item-action list-group-item-danger'

  return (
    <div className='row'>
      <div className="col-3">
      </div>
      <div className="col-6">
        <li className={purchasingStatusClass}>
          <div className='col-sm-6'>
            <h4>{name} <em>{amount}</em></h4>
            <em>{description}</em>
          </div>
          <div className='col-sm-4'>
            <h6 className="text-right">{category}</h6>
            <Button color='success' size='sm'>
              Mark purchase
            </Button>
          </div>
          <div className='col-sm-2'>

          </div>
        </li>
      </div>
      <div className="col-3">
      </div>
    </div>


  )
}

GroceryCard.propTypes = {
  groceryItem: PropTypes.object.isRequired
}

export default GroceryCard
