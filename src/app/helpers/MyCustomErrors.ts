class MyCustomErrors extends Error{

  constructor(
    public message: string,
    public statusCode: number
  ){
    super()
  }

}

export default MyCustomErrors;