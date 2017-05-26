package cz.vitaplsek.coderetreat;

import org.junit.Test;

import java.util.List;

import static java.util.Arrays.asList;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;

/**
 * Created by vita on 26.05.16.
 */
public class GameOfLifeTest {

  @Test
  public void testMock() {
    IMy mock = mock(IMy.class);

    when(mock.isTrue()).thenReturn(true);

    assertThat(mock.isTrue()).isTrue();
    assertTrue(mock.isTrue());

    verify(mock,atLeastOnce()).isTrue();
  }

  @Test
  public void testMockJava8() throws Exception {
    IMy mock = mock(IMy.class);

    when(mock.isTrueFor(anyInt())).thenReturn(true);

    List<Integer> numbers = asList(1,2,3,4,5);
    numbers.forEach(mock::isTrueFor);

    verify(mock,times(5)).isTrueFor(anyInt());
  }

  interface IMy {
    boolean isTrue();
    boolean isTrueFor(int value);
  }


}
