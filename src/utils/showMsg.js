/**
 * 
 * @param {Obj} options {
 * @param content : 文本内容
 * @param type : 消息内容；
 * @param duration : 延时；
 * @param container : 容器
 * }
 */
import getComponentRootDom from "./getComponentRootDom";
import showCss from "./showMsg.module.less";
import Icon from "../components/Icon";
export default function(options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;



    const div = document.createElement("div");
    const icon = getComponentRootDom(Icon, {
        type: type,
    })
    div.innerHTML = `<span class = "${showCss.icon}">${icon.outerHTML}</span><p>${content}</p>`;
    div.className = `${showCss.container} ${showCss[`container-${type}`]}`;
   container.appendChild(div);
   div.clientHeight;
   div.style.opacity = 1;
   div.style.transform = 'translate(-50%, -50%)';
   setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = 'translate(-50%, -50%) translateY(-25px)';
    div.addEventListener(
        "transitionend",
        function() {
          div.remove();
          // 运行回调函数
          options.callback && options.callback();
        },
        { once: true }
      );
   }, duration);
   
}