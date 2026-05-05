'use client';

import React, { useRef, useEffect } from 'react';
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glProgramRef = useRef<WebGLProgram | null>(null);
  const glBgColorLocationRef = useRef<WebGLUniformLocation | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const backgroundColor = [0, 0, 0]; // always dark

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;
    glRef.current = gl;

    const vertexShaderSource = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBackgroundColor;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff = center-uv;
        float len = length(diff);
        len += variation(diff,vec2(0.,1.),5.,2.);
        len -= variation(diff,vec2(1.,0.),5.,2.);
        float circle = smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv = gl_FragCoord.xy/iResolution.xy;
        uv.x *= 1.5; uv.x -= 0.25;
        float mask = 0.0;
        float radius = .35;
        vec2 center = vec2(.5);
        mask += paintCircle(uv,center,radius,.035).r;
        mask += paintCircle(uv,center,radius-.018,.01).r;
        mask += paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        vec3 foregroundColor=vec3(0.12+v.x*0.3, 0.28+v.y*0.3, 0.35+v.y*v.x*0.5);
        vec3 color=mix(uBackgroundColor,foregroundColor,mask);
        color=mix(color,vec3(0.5,0.72,0.82),paintCircle(uv,center,radius,.003).r);
        gl_FragColor=vec4(color,1.);
      }`;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vertexShaderSource));
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource));
    gl.linkProgram(program);
    gl.useProgram(program);
    glProgramRef.current = program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(program, 'iTime');
    const iResLoc = gl.getUniformLocation(program, 'iResolution');
    glBgColorLocationRef.current = gl.getUniformLocation(program, 'uBackgroundColor');
    gl.uniform3fv(glBgColorLocationRef.current, new Float32Array(backgroundColor));

    let animationFrameId: number;
    const render = (time: number) => {
      gl.uniform1f(iTimeLoc, time * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full block z-0 opacity-60" />;
};

export interface PricingCardProps {
  planName: string;
  description: string;
  priceLabel: string;
  priceSub?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: 'primary' | 'secondary';
  onButtonClick?: () => void;
}

export const PricingCard = ({
  planName, description, priceLabel, priceSub = "Individuelles Angebot",
  features, buttonText, isPopular = false, buttonVariant = 'primary', onButtonClick
}: PricingCardProps) => {
  return (
    <div className={`
      relative flex-1 max-w-xs px-7 py-8 flex flex-col rounded-2xl
      border transition-all duration-300
      ${isPopular
        ? 'bg-white/[0.07] border-[#7eb8d0]/30 shadow-[0_0_40px_rgba(126,184,208,0.1)]'
        : 'bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15]'}
    `}>
      {isPopular && (
        <>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7eb8d0]/60 to-transparent rounded-t-2xl" />
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-semibold rounded-full bg-[#7eb8d0] text-black tracking-wide">
            Empfohlen
          </div>
        </>
      )}

      <div className="mb-4">
        <h2 className="text-3xl font-light tracking-tight text-white">{planName}</h2>
        <p className="text-sm text-white/35 mt-2 font-light leading-relaxed">{description}</p>
      </div>

      <div className="my-6">
        <span className="text-2xl font-light text-white">{priceLabel}</span>
        <p className="text-xs text-white/25 mt-1 font-light">{priceSub}</p>
      </div>

      <div className="w-full mb-5 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <CheckIcon className="text-[#7eb8d0] w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span className="text-white/50 text-[13px] font-light leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <RippleButton
        onClick={onButtonClick}
        className={`
          mt-auto w-full py-2.5 rounded-xl font-medium text-[13px] transition-all duration-300
          ${buttonVariant === 'primary'
            ? 'bg-white text-black hover:bg-[#7eb8d0] hover:text-white hover:shadow-[0_0_20px_rgba(126,184,208,0.3)]'
            : 'bg-white/[0.05] text-white/60 border border-white/[0.1] hover:bg-white/[0.1] hover:text-white'}
        `}
      >
        {buttonText}
      </RippleButton>
    </div>
  );
};

interface ModernPricingPageProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  plans: PricingCardProps[];
  showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
  title, subtitle, plans, showAnimatedBackground = true,
}: ModernPricingPageProps) => {
  return (
    <div className="relative bg-black w-full overflow-x-hidden section-glow">
      {showAnimatedBackground && <ShaderCanvas />}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-base text-white/35 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full max-w-4xl">
          {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
        </div>
      </div>
    </div>
  );
};
