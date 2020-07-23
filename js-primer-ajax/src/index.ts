interface userInfo {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  public_repos: number;

  [x: string]: unknown;
}

type userInfoKeys = keyof userInfo;

async function main(): Promise<void> {
  try {
    const userId = getUserId();
    const userInfo = await fetchGitHubUserInfo(userId);
    const view = createView(userInfo);
    displayView(view);
  } catch (error) {
    console.log(new Date() + ": an error occurred");
    console.error(error);
  }
}

async function fetchGitHubUserInfo(userId: string): Promise<userInfo> {
  return fetch(
    `https://api.github.com/users/${encodeURIComponent(userId)}`
  ).then((response) => {
    console.log(response.status);

    if (!response.ok) {
      throw new Error(
        `${new Date()}: ${response.status}: ${response.statusText}`
      );
    }
    return response.json();
  });
}

function getUserId(): string {
  const input = document.getElementById("userId") as HTMLInputElement;
  return input.value;
}

function createView(userInfo: userInfo): string {
  return escapeHTML`
<h4>${userInfo.name} (@${userInfo.login})</h4>
<img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
<dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
</dl>
`;
}

function displayView(view: string): void {
  const result = document.getElementById("result");
  if (result == null) throw new TypeError("emelemt id result is not defined");
  result.innerHTML = view;
}

function escapeSpecialChars(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHTML(
  strings: TemplateStringsArray,
  ...values: userInfoKeys[]
): string {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}

// for test

export {
  fetchGitHubUserInfo,
  escapeHTML,
  escapeSpecialChars,
  displayView,
  createView,
  main,
};
