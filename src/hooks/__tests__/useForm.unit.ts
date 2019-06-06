import useForm from '../useForm'

describe('useForm', () => {
  it('should be defined', () => {
    expect(typeof useForm).toBe('function')
  })

  it('should return an object containing form control', () => {
    const formControl = useForm({ initialValues: {}, onSubmit: jest.fn() })

    expect(typeof formControl).toBe('object')

    expect(formControl).toMatchSnapshot()
  })
})
