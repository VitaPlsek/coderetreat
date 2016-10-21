interface TypeInterface {
  isTrue() : boolean;
}

describe('Game of Life', () => {
  it('has mock test', () => {

    const mock:TypeInterface = jasmine.createSpyObj<TypeInterface>('isTrue', ['isTrue']);
    (<jasmine.Spy>mock.isTrue).and.returnValue(true);

    let result: boolean = mock.isTrue();

    expect(result).toBeTruthy();
    expect(mock.isTrue).toHaveBeenCalled();
  });
});