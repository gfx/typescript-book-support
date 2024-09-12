type VersionString = `v${number}.${number}.${number}`;

const a = "v1.2.3" satisfies VersionString;
const b = "v1.10.0" satisfies VersionString;
