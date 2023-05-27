const Error = ({children}) => {
    return (
        <div className='text-white bg-red-600 rounded-xl text-bold p-3 uppercase mb-3'>
            <h1 >{children}</h1>
        </div>
    )    
}
export default Error