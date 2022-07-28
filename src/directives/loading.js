import imgUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
export default function(el, binding) {
    //创建一个img
    const curImg = getLoadingImg(el);
    if (binding.value) {
        if (!curImg) {
            el.appendChild(createLoadingImg());
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
    //判断是否存在img
}

function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]");
}

function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = imgUrl;
    img.className = styles.loading;
    return img;
}