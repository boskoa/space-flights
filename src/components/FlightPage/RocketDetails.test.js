import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RocketDetails from './RocketDetails'

test('renders content', () => {
  const flight = {
    rocket: {
      rocket_name: 'rocket_name',
      rocket_type: 'rocket_type',
      first_stage: {
        cores: [
          {
            core_serial: 'core_serial'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'payload_id',
            customers: ['Customer'],
            payload_type: 'payload_type',
            nationality: 'nationality'
          }
        ]
      },

    }
  }

  const { container } = render(<RocketDetails flight={flight} />)
  const element = container.querySelector('.rocket-details')

  expect(element).toHaveTextContent('rocket_name')
  expect(element).toHaveTextContent('Customer')
})