import { Button, Input } from '../'
import { StyledForm } from './menuStyles'
import Select from 'react-select'
import { useContext } from 'react'
import { AppContext } from '../../Context/appContext'
import Swal from 'sweetalert2/dist/sweetalert2.all'

const types = [
  { value: 'income', label: 'Income' },
  { value: 'outflow', label: 'Outflow' }
]
const categories = [
  { value: 'personal', label: 'Personal', id: 1 },
  { value: 'expenses', label: 'Expenses', id: 2 },
  { value: 'food', label: 'Food', id: 4 },
  { value: 'phone', label: 'Phone', id: 3 }
]

const Menu = () => {
  const { token, toggleModal } = useContext(AppContext)

  function handleSubmit (e) {
    e.preventDefault()
    const form = new window.FormData(e.target)
    const data = {
      concept: form.get('concept'),
      amount: form.get('amount'),
      categoryId: categories.find(c => c.value === form.get('category')).id ?? 1,
      date: form.get('date'),
      type: form.get('type')
    }
    fetch('/api/operations', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + token
      }
    }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Operation created!'
      })
      toggleModal()
    }
    )
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor='concept'>Concept</label>
          <Input type='text' name='concept' maxLength='60' id='concept' />
        </div>
        <div>
          <label htmlFor='category'>Category
            <br />
          </label>
          <Select
            name='category'
            id='category'
            defaultValue={categories[0].value}
            options={categories}
          />
        </div>
        <div>
          <label htmlFor='amount'>Amount</label>
          <Input type='number' name='amount' min='0' id='amount' />
        </div>
        <div>
          <label htmlFor='type'>Type
            <br />
          </label>
          <Select
            defaultValue={types[0].value}
            name='type'
            id='type'
            options={types}
          />
        </div>
        <div>
          <label htmlFor='date'>Date
            <br />
          </label>
          <Input type='date' name='date' id='date' />
        </div>
        <div>
          <Button primary type='submit'>Add Operation</Button>
          <Button onClick={toggleModal}>Cancel</Button>
        </div>
      </StyledForm>
    </div>
  )
}

export { Menu }
