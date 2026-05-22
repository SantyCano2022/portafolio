#include ../includes/avatar-progress/fragment.glsl;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uFrame;
uniform vec3 uFeatureTint;
uniform float uFeatureStrength;

#define ROWS 4.
#define COLUMNS 4.

void main() {
  // Calculate tile position
  float column = mod(uFrame, COLUMNS);
  float row = floor(uFrame / COLUMNS);

  // Flip Y because texture atlases often start from top-left
  row = (ROWS - 1.0) - row;

  // Scale UVs to a single tile
  vec2 uv = vUv;
  uv.x = (uv.x + column) / COLUMNS;
  uv.y = (uv.y + row) / ROWS;

  vec4 textureColor = texture2D(uTexture, uv);

  // Darken eyebrows/dark features. Skip transparent + already-bright pixels.
  float lum = dot(textureColor.rgb, vec3(0.299, 0.587, 0.114));
  float featureMask = (1.0 - smoothstep(0.50, 0.70, lum)) * textureColor.a;
  vec3 tinted = textureColor.rgb * uFeatureTint;
  vec3 finalColor = mix(textureColor.rgb, tinted, featureMask * uFeatureStrength);

  float progress = getProgress();

  gl_FragColor = vec4(finalColor, progress * textureColor.a);
}