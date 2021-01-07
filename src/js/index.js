
class SetData extends React.Component {
    state = {
        name: '',
        author: '',
        url: ''
    }
    
    handleChangeName = e => {
        this.setState({ name: e.target.value })
    }
    handleChangeAuthor = e => {
        this.setState({ author: e.target.value })
    }
    handleChangeUrl = e => {
        this.setState({ url: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        
        axios.post('https://luxinhe-bot.herokuapp.com/setdata', {filename: this.state.name,username: this.state.author,fileUrl: this.state.url})
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }
    
    render() {
        return (
            <div className="SetData">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleChangeName} />
                    <input type="text" name="author" onChange={this.handleChangeAuthor} />
                    <input type="text" name="url" onChange={this.handleChangeUrl} />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
