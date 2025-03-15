import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import todo from './todo.vue';

type HomeComponentType = InstanceType<typeof todo>;

describe('todo', () => {
  let todo: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(todo, {
      global: {
        stubs: {
          'router-link': true,
        },
        provide: {
          homeService,
          authenticated,
          currentUsername,
        },
      },
    });
    todo = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(todo.authenticated).toBeFalsy();
    expect(todo.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(todo.authenticated).toBeTruthy();
    expect(todo.username).toBe('test');
  });

  it('should use todo service', () => {
    todo.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});
