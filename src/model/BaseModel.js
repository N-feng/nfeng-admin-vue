
// 必须继承才能使用
class BaseModel {
    // 设置数据
    setDataWithJson(json) {
        return Object.assign(this, json);
    }

    // 根据数据设置对象并获取
    static creatModelWithJson(json) {
        const model = new this();
        model.setDataWithJson(json);
        return model;
    }

    // 根据json数组获取数组对象
    static getModelsWithArr(dataArr) {
        if (!Array.isArray(dataArr)) {
            return [];
        }
        return dataArr.map(item => this.creatModelWithJson(item));
    }
}

export default BaseModel;
