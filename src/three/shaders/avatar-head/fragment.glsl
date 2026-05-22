#include ../includes/avatar-progress/fragment.glsl;
#include ../includes/about-ambient.glsl;

uniform sampler2D uHeadTexture;
uniform vec2 uHeadTextureSize;
uniform vec3 uHairTint;
uniform float uHairStrength;

varying vec2 vUv;

void main() {
    vec4 tex = texture2D(uHeadTexture, vUv);

    // Dark feature detection (hair + eyebrows). Skin ~0.7+, hair ~0.35-0.45, eyebrows ~0.45-0.55.
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    float hairMask = 1.0 - smoothstep(0.50, 0.65, lum);
    vec3 tinted = tex.rgb * uHairTint;
    vec3 finalColor = mix(tex.rgb, tinted, hairMask * uHairStrength);

    float progress = getProgress();

    gl_FragColor = vec4(applyAmbient(finalColor), progress);
}