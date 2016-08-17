import fetch from 'isomorphic-fetch'

export const REQUEST_NODE = 'REQUEST_NODE'
export const RECEIVE_NODE = 'RECEIVE_NODES'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_CATEGORY,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_CATEGORY,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_NODE,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_NODE,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}