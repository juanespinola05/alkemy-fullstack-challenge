import DonutChart from 'react-donut-chart'
import { Container, CategoryList } from './chartStyles'

const Chart = ({ children }) => {
  return (
    <>
      {children}
      <Container>
        <DonutChart
          data={[
            {
              label: 'Food',
              value: 25
            },
            {
              label: 'Other',
              value: 25
            },
            {
              label: 'Subscriptions',
              value: 25
            },
            {
              label: 'Personal',
              value: 25
            }
          ]}
          interactive={false}
          colors={[
            'var(--color-main)',
            'var(--color-main-lighter)',
            'var(--color-main-darker)',
            'var(--color-green)'
          ]}
          height={300}
          width={300}
          legend={false}
          strokeColor='#FFFFFF'
        />
      </Container>
      <CategoryList>
        <li>
          <p>Personal</p>
        </li>
        <li>
          <p>Expenses</p>
        </li>
        <li>
          <p>Food</p>
        </li>
        <li>
          <p>Other</p>
        </li>
      </CategoryList>
    </>
  )
}

export { Chart }
