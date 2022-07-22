class NavItem {
    constructor(
        id,
        name,
        content,
        image1,
        image2,
        indexNum,
        colorArray
    ){
        this.id = id;
        this.name = name;
        this.content = content;
        this.image1 = image1;
        this.image2 = image2;
        this.indexNum = indexNum;
        this.colorArray = colorArray;
    };
    setupColorArray(header, center, textWrap, textColor, footer) {
        this.colorArray = [header, center, textWrap, textColor, footer]
    }
};

export default NavItem;