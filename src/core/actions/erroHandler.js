const erros = (error) => {
    if (!error.response || !error.response.data) {
        console.log('estou no erro...')
        return { status: 500, message: "Ocorreu um erro no servidor. Tente novamente." }
    }
    return { erro: error.response.data }
}

export default erros;