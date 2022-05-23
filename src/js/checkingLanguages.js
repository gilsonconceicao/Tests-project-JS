// Checking languages

const languages = [
    {
        nameLanguage: 'JAVASCRIPT', 
        description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.' 
    }, 
    {
        nameLanguage: 'C#', 
        description: 'C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++.'
    },
    {
        nameLanguage: 'JAVA', 
        description: 'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems. Em 2008 o Java foi adquirido pela empresa Oracle Corporation.'
    }, 
    {
        nameLanguage: 'PYTHON', 
        description: 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.'
    }, 
    {
        nameLanguage: 'PHP', 
        description: 'PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.'
    },
]

function getLanguage() {
    // checked
    const optionLanguage = document.getElementsByName('languages'); 
    let textName = ''; 
    let textDescription = ''; 

    // images

    let iconFontAwesome = ''

    // function 
    const checkedingLanguage = () => {

        if (optionLanguage[0].checked) {
            textName = languages[0].nameLanguage; 
            textDescription = languages[0].description; 
            iconFontAwesome = '<i class="fa-brands fa-js-square"></i>'

        } else if (optionLanguage[1].checked) {
            //textName = languages[1].nameLanguage; 
            textDescription = languages[1].description; 
            iconFontAwesome = '<i class="fa-solid fa-c"></i>#'

        } else if (optionLanguage[2].checked) {
            textName = languages[2].nameLanguage; 
            textDescription = languages[2].description; 
            iconFontAwesome = '<i class="fa-brands fa-java"></i>'

        } else if (optionLanguage[3].checked) {
            textName = languages[3].nameLanguage; 
            textDescription = languages[3].description; 
            iconFontAwesome = '<i class="fa-brands fa-python"></i>'
            
        } else if (optionLanguage[4].checked) {
            textName = languages[4].nameLanguage; 
            textDescription = languages[4].description; 
            iconFontAwesome = '<i class="fa-brands fa-php"></i>'
            
        }
    }
    checkedingLanguage()


    let conteinerAnswer = document.querySelector('.answerLanguages'); //textName + textDescription
    conteinerAnswer.innerHTML = `
        <div class="conteinerjs">
            <span class="iconLanguage">${iconFontAwesome}</span>
            <h2>${textName}</h2>
            <p>${textDescription}</p>
        </div>
    `
}   


let btn = document.getElementById('CheckingLanguages')
    .addEventListener('click', function() {
 
        getLanguage();

        let imgResponse = document.getElementsByClassName('imgWelcome')[0]
        imgResponse.style.width = '200px'; 

    })