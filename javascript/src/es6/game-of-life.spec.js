describe('Game of Life', () => {

  it('has mock test', () => {

    const mock = {};
    mock.isTrue = jasmine.createSpy('isTrue').and.returnValue(true);

    expect(mock.isTrue()).toBe(true);
    expect(mock.isTrue).toHaveBeenCalled();
  });
});