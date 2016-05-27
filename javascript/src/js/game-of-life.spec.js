describe('Game of Life', function(){

  it('has mock test', function(){

    var mock = {};
    mock.isTrue = jasmine.createSpy('isTrue').and.returnValue(true);

    expect(mock.isTrue()).toBe(true);
    expect(mock.isTrue).toHaveBeenCalled();
  });
});