(self.webpackChunkmyrtex_mf_profile=self.webpackChunkmyrtex_mf_profile||[]).push([[460],{9079:(O,b,u)=>{u.r(b),u.d(b,{outputFromObservable:()=>D,outputToObservable:()=>v,takeUntilDestroyed:()=>l,toObservable:()=>d,toSignal:()=>_});var e=u(2331),a=u(4866),y=u(2778);function l(r){r||((0,e.assertInInjectionContext)(l),r=(0,e.inject)(e.DestroyRef));const t=new a.Observable(n=>r.onDestroy(n.next.bind(n)));return n=>n.pipe((0,y.takeUntil)(t))}class f{constructor(t){this.source=t,this.destroyed=!1,this.destroyRef=(0,e.inject)(e.DestroyRef),this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(t){if(this.destroyed)throw new e.\u0275RuntimeError(953,!1);const n=this.source.pipe(l(this.destroyRef)).subscribe({next:s=>t(s)});return{unsubscribe:()=>n.unsubscribe()}}}function D(r,t){return new f(r)}function v(r){const t=(0,e.\u0275getOutputDestroyRef)(r);return new a.Observable(n=>{t?.onDestroy(()=>n.complete());const s=r.subscribe(i=>n.next(i));return()=>s.unsubscribe()})}function d(r,t){!t?.injector&&(0,e.assertInInjectionContext)(d);const n=t?.injector??(0,e.inject)(e.Injector),s=new a.ReplaySubject(1),i=(0,e.effect)(()=>{let c;try{c=r()}catch(o){return void(0,e.untracked)(()=>s.error(o))}(0,e.untracked)(()=>s.next(c))},{injector:n,manualCleanup:!0});return n.get(e.DestroyRef).onDestroy(()=>{i.destroy(),s.complete()}),s.asObservable()}function _(r,t){const n=!t?.manualCleanup;n&&!t?.injector&&(0,e.assertInInjectionContext)(_);const s=n?t?.injector?.get(e.DestroyRef)??(0,e.inject)(e.DestroyRef):null;let i;i=(0,e.signal)(t?.requireSync?{kind:0}:{kind:1,value:t?.initialValue});const c=r.subscribe({next:o=>i.set({kind:1,value:o}),error:o=>{if(t?.rejectErrors)throw o;i.set({kind:2,error:o})}});return s?.onDestroy(c.unsubscribe.bind(c)),(0,e.computed)(()=>{const o=i();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new e.\u0275RuntimeError(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}}}]);