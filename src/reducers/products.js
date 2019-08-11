var initialState = [
    {
        id : 1,
        name : ' iphone 7 ',
        image : 'https://znews-photo.zadn.vn/w860/Uploaded/mdf_qsklky/2017_11_21/samsunggalaxynote85.jpg',
        description: 'san pham apple',
        price : 500,
        inventory : 10,
        rating:4
    },
    {
        id : 2,
        name : ' iphone 6 ',
        image : 'https://znews-photo.zadn.vn/w860/Uploaded/mdf_qsklky/2017_11_21/samsunggalaxynote85.jpg',
        description: 'san pham apple',
        price : 400,
        inventory : 15,
        rating:3
    },
    {
        id : 3,
        name : ' iphone 5 ',
        image : 'https://znews-photo.zadn.vn/w860/Uploaded/mdf_qsklky/2017_11_21/samsunggalaxynote85.jpg',
        description: 'san pham apple',
        price : 300,
        inventory : 5,
        rating:5
    }
];
const products = (state = initialState , action) =>{
    switch(action.type){
        default : return [...state];
    }
}
export default products;