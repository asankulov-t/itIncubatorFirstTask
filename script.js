let arr=[{name:'Dimych', age:18},{name:'Катя', age: 20},{name: 'Perizat', age: 21}]

function clickSearch() {
    let value=document.getElementById('value').value
    if (value==='Google'){
        alert('Yandex круче. Но это не точно')
    }else {
        alert(`${value}, ${arr[0].name}`)
    }
}
let clButton=document.getElementById('search').addEventListener('click',function () {
    setTimeout(clickSearch,3000)
})
