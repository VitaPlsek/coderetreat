import org.junit.Test;

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

  interface IMy {
    boolean isTrue();
  }

}
