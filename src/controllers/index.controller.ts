abstract class BaseController {
  private _model;

  constructor(model: any) {
    this._model = model;
  }

  static create(data: {}) {}

  static getAll(opt: {}) {
    const { order, where, limit, offset } = opt as any;
  }

  static getById(id: number | string, data: {}) {}

  static updateById(id: number | string) {}

  static deleteById(id: number | string) {}
}

export { BaseController };
