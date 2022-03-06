// 在当前页 是否允许开启页面鼠标滚动效果
export const RemoveScroll=()=> {
    document.body.style.overflow = "hidden";
}
export const AddScroll=()=> {
    document.body.style.overflow = "visible";
}